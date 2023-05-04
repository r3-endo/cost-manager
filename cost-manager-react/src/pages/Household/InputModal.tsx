import { Modal, Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import React, { memo, useState } from 'react';

type Props = {
  open: boolean,
  handleClose: () => void,
}

type FormType = {
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: Date | null;
  memo: string;
}

const initialFormValues: FormType = {
  type: 'expense',
  category: '',
  amount: 0,
  date: null,
  memo: '',
}

const categories = [
  { id: 1, name: '食費'},
  { id: 2, name: '交通費' },
  { id: 3, name: '住居費' },
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function InputModal(props: Props) {
  const { open, handleClose } = props;
  const [ amount, setAmount ] = useState(0);
  const [ date, setDate ] = useState(new Date());
  const [ category, setCategory ] = useState();
  return(
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            入力
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <TextField
                id="outlined-basic"
                label="金額"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                fullWidth
                required/>
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="日付"
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(new Date(e.target.value))}
                fullWidth/>
              <Select
                id="demo-simple-select"
                value={category}
                label="分類"
              >
              </Select>
              <br />
              <br />
              <Button variant="contained" color="primary" onClick={handleClose}>
                送信
              </Button>
              </form>
          </Typography>
        </Box>
      </Modal>
    </>
  )

}

export default memo(InputModal)