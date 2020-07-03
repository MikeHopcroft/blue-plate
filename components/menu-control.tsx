import { createMasterDetail } from './master-detail-control';
import ProductDetailControl from './product-detail-control';
import ProductListControl from './product-list-control';

const MasterDetail = createMasterDetail(
  ProductListControl,
  ProductDetailControl,
  ProductDetailControl
);

export default MasterDetail;
