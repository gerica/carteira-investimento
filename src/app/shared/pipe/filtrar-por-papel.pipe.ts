import { Papel } from './../modelo/papel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarPorPapel'
})
export class FiltrarPorPapelPipe implements PipeTransform {

      transform(papel: Papel[], digitado: string) {        
        if (!papel || !digitado) {
            return papel;
        }

        return papel.filter((item: any) => {
            for (let key in item) {
                if ((typeof item[key] === 'string' || item[key] instanceof String) &&
                    (item[key].toUpperCase().indexOf(digitado.toUpperCase()) !== -1)) {                    
                    return true;
                }
            }
            return false;
        });
    }

}
