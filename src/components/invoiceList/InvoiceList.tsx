import { connect } from 'react-redux';
import { fetchBills } from '../../redux/billAction';
import { useEffect, useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import '../../styles/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faSpinner } from '@fortawesome/free-solid-svg-icons';

const InvoiceList = ({
  fetchBills,
  bills,
  isLoading,
  error,
  page,
  limit,
}: any) => {
  const [invoiceDetails, setInvoiceDetails] = useState<object>({});

  const handleOpen = (rowDetails: any) => {
    setInvoiceDetails(rowDetails);
  };
  const handleClose = () => {
    setInvoiceDetails({});
  };

  useEffect(() => {
    fetchBills({ page, limit });
  }, [page, limit, fetchBills]);

  const billsColumns: GridColDef[] = [
    {
      field: 'issued_at',
      type: 'dateTime',
      headerName: 'Date',
      width: 200,
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row.issued_at),
    },
    { field: 'notes', headerName: 'Description', width: 150 },
    { field: 'contact_name', headerName: 'Payee', width: 200 },
    {
      field: 'amount_formatted',
      headerName: 'Spent',
      width: 90,
    },
    {
      field: '',
      headerName: '',
      width: 160,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="infoBtnContainer">
            <FontAwesomeIcon
              icon={faCircleInfo}
              style={{ color: '#000000', cursor: 'pointer' }}
              onClick={() => handleOpen(params.row)}
              size="lg"
            />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {error ? (
        'err'
      ) : isLoading ? (
        <div className="loading">
          <h3>Data is loading. Please wait.</h3>
          <br />
          <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
        </div>
      ) : (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={bills}
            columns={billsColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection={false}
          />
        </div>
      )}
      <Modal
        open={invoiceDetails?.id ? true : false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="modalContent">{invoiceDetails?.contact_address}</div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return state.bills;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchBills: ({
      page,
      limit,
      requestType,
    }: {
      page: number;
      limit: number;
      requestType: string;
    }) => dispatch(fetchBills({ page, limit, requestType })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);
