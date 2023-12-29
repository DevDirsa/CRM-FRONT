import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "status",
})
export class StatusPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // Lógica de transformación aquí

    
    return (value === 1) ? 'Activo' : 'Inactivo';
  }
}
