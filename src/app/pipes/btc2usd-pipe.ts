import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../config/constantes.config';

@Pipe({
  name: 'btc2usd'
})
export class Btc2usdPipe implements PipeTransform {

  /**
   *
   * @param value la valeur à transformer (à piper)
   * @param args (l'ensemble des paramètres du pipe)
   * @returns la valeur transformée
   */
  transform(amount: number, isBtc2Usd = true): number {
    return isBtc2Usd ?
           amount * APP_CONST.btc2usd
           : amount /APP_CONST.btc2usd;
  }

}
