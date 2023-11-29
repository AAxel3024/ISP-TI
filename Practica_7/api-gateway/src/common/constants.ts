export enum RabbitMQ {
  FlujoProcesoQueue = 'flujoprocesos',
  OpcionQueue = 'opciones',
  TipoFlujoProcesoQueue = 'tipoflujoprocesos',
}

export enum FlujoProcesoMSG {
  CREATE = 'CREATE_FLUJOPROCESO',
  FIND_ALL = 'FIND_FLUJOPROCESOS',
  FIND_ONE = 'FIND_FLUJOPROCESO',
  UPDATE = 'UPDATE_FLUJOPROCESO',
  DELETE = 'DELETE_FLUJOPROCESO',
}
export enum  OpcionMSG {
  CREATE = 'CREATE_OPCION',
  FIND_ALL = 'FIND_OPCIONES',
  FIND_ONE = 'FIND_OPCION',
  UPDATE = 'UPDATE_OPCION',
  DELETE = 'DELETE_OPCION',
}
export enum TipoFlujoProcesoMSG {
  CREATE = 'CREATE_PROCESO_TIPOFLUJOPROCESO',
  FIND_ALL = 'FIND_PROCESO_TIPOFLUJOPROCESOS',
  FIND_ONE = 'FIND_PROCESO_TIPOFLUJOPROCESO',
  UPDATE = 'UPDATE_PROCESO_TIPOFLUJOPROCESO',
  DELETE = 'DELETE_PROCESO_TIPOFLUJOPROCESO',
}
