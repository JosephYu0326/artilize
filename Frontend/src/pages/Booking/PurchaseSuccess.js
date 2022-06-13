//購買完成
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/PurchaseSuccess.scss'
import success from './image/success.png'
import pic from './image/1654406994908.jpg'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function PurchaseSuccess(props) {
  const history = useHistory()
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    icon: 'success',
    title: '購買成功',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  }).then(() => {
    history.push('/users/orderrecord')
  })

  return (
    <>
      <Header />
      {/* <div>購買完成</div> */}
      <div className="container usersRow ">
        <div className="allTextStep">
          <div className="row d-flex justify-content-center">
            <div className="col-6 mb-5">
              <img src={success} className="img-fluid" alt="progressBar" />
            </div>
          </div>
        </div>
        <div className="row d-flex justitfy-content-center">
          <div className="col p-0"></div>
        </div>
        <div className="row ">
          <div className="col-12 ">
            <div className="greeting">
              <h3 className="Regular">感謝您的訂購</h3>
              <h3 className="Regular">訂單明細已寄到您的e-mail</h3>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <Footer />
    </>
  )
}

export default PurchaseSuccess
// style={{ maxwidth: '540px' }}
