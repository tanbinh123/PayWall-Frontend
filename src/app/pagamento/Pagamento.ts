import {Observable} from "rxjs";

export class Pagamento {
  id: number;
  tributo: string;
  nomeFornecedor: string;
  dataEmissao: string;
  dataVencimento: string;
  observacao: string;
  valorLiquido: number;
  valorBruto: number;
  desconto: number;
  idTipoPedido: number;


  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  fileInfos: Observable<any>;

}
