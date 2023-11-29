import { ITipoFlujoProceso } from './tipo_flujo_proceso.interface';
import { IOpcion } from './opciones.interface';
export interface IFlujoProceso {
  _id?: string;
  name: string;
  tipo_flujo_proceso_id: ITipoFlujoProceso;
  opciones_id: IOpcion;
}
