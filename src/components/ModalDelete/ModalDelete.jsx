import React from 'react'
import {useDispatch} from 'react-redux'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import './ModalDelete.scss'
import { deleteDish } from '../../redux/Slice/menuSlice'
import { deleteAccount } from '../../redux/Slice/accountSlice'

const ModalDelete = ({id,type = 'dish',name,setIsToggleDelete}) => {
  const dispatch = useDispatch();
  const handleDelete = () =>{
    if(type === 'dish'){
      dispatch(deleteDish(id))
    }
    else{
      dispatch(deleteAccount(id))
    }
    setIsToggleDelete(false)
  }
  return (
    <Modal>
        <div className='modal-delete'>
            <h1>Delete  {name} ?</h1>
            <p>Are you sure to delete {name} ?</p>
            <div className='modal-delete__wrapBtn'>
              <Button onClick={handleDelete}>
                  Delete
              </Button>
              <Button onClick={() => setIsToggleDelete(false)}>
                  cancel
              </Button>

            </div>
        </div>
    </Modal>
  )
}

export default ModalDelete