import { Component, TemplateRef } from '@angular/core';
import { Location } from "@angular/common";
import * as XLSX from "xlsx"; // Asegúrate de importar correctamente la librería xlsx
import { LoadService } from '../../services/index-services';
import Swal from "sweetalert2";

@Component({
  selector: "ngx-load-create",
  templateUrl: "./load-create.component.html",
  styleUrls: ["./load-create.component.scss"],
})
export class LoadCreateComponent {
  loading: boolean = false;
  loadingTemplate!: TemplateRef<any>;
  constructor(private _location: Location, private _srvLoad: LoadService) {}
  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = e.target.result;
      const workbook = this.readExcelFile(data);
      const excelData = this.extractDataFromWorkbook(workbook);
      this.sendDataToREST(excelData);
    };

    reader.onerror = (error) => {
      console.error("Error al leer el archivo:", error);
    };

    reader.readAsBinaryString(file);
  }

  readExcelFile(data: any): any {
    const binaryString = data;
    const workbook = XLSX.read(binaryString, { type: "binary" });
    return workbook;
  }

  extractDataFromWorkbook(workbook: any): any[] {
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const range = XLSX.utils.decode_range(worksheet["!ref"]);

    const excelData: any[] = [];
    for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
      const row: any = {};
      let hasData = false;
      for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
        const cellAddress = XLSX.utils.encode_cell({ r: rowNum, c: colNum });
        const cell = worksheet[cellAddress];
        const cellValue = cell ? cell.v : undefined;
        row[colNum] = cellValue !== undefined ? cellValue : "--";
        if (cellValue !== undefined && cellValue !== "") {
          hasData = true;
        }
      }
      if (hasData) {
        excelData.push(row);
      }
    }

    return excelData;
  }

  sendDataToREST(data: any[]) {
    this.loading = true;
    // Aquí debes implementar tu lógica para enviar los datos al servicio REST
    console.log("Datos extraídos del archivo Excel:", data);

    data.splice(0, 1);
    data.splice(0, 1);

    const body = {
      data: data,
    };

    this._srvLoad.create(body).subscribe((response) => {
      console.log(response);
       Swal.fire({
         title: "DO IT RIGHT!",
         text: "Archivo cargado correctamente.",
         icon: "success",
         confirmButtonText: "ACEPTAR",
       });
      this.loading = false;
    });
    // Ejemplo de envío de datos ficticio
    // this.http.post('URL_DEL_SERVICIO_REST', data)
    //   .subscribe(
    //     (response) => {
    //       console.log('Datos enviados al servicio REST:', response);
    //     },
    //     (error) => {
    //       console.error('Error al enviar datos al servicio REST:', error);
    //     }
    //   );
  }
  return(): void {
    this._location.back();
  }
}
