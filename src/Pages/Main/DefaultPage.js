import React from 'react'
import img3 from '../../assets/img/img3.svg'
import img1 from '../../assets/img/img1.svg'
import img2 from '../../assets/img/img2.svg'
import img4 from '../../assets/img/img4.svg'
import img6 from '../../assets/img/img6.svg'
import img5 from '../../assets/img/img5.svg'
import img7 from '../../assets/img/img7.svg'
const DefaultPage = () => {
              return (
                            <>
                                     <div className="container mt-4">
                                          <div className="content-1 mb-3">
                                                        <div className='row col-12'>
                                                                      <h2>
                                                                                    Merhaba,
                                                                                    <img src={img2} />
                                                                      </h2>
                                                                      <span className='text'>QR CARS’a hoş geldin!</span>

                                                        </div>

                                          </div>
                                          <div className='card p-2 content-2 mb-3'>
                                                        <div className='row'>
                                                                      <div className='col-7'>
                                                                                    <img src={img3} /> <span className='text'><strong>Profil Durum Bilgisi</strong></span><br />
                                                                                    <span className='text text-danger'>Marketteyim acilse arayabilirsiniz.</span>

                                                                      </div>
                                                                      <div className='col-5'>
                                                                                    <img src={img1} />
                                                                      </div>
                                                        </div>
                                          </div>
                                          <div className='card p-3 content-3 mb-3'>
                                                        <div className='row'>
                                                                      <div className='col-9  mb-5 '>
                                                                                    <img src={img5} /> <span className='text'><strong>Sabit Telefon</strong></span><br />
                                                                                    <span className='text2 text-muted'>QRcars uygulamamızı kullanarak araç sahibine kolayca ulaşabilirsiniz!</span>

                                                                      </div>
                                                                      <div className='col-3 mb-5 text-end'>
                                                                                    <img src={img7} />
                                                                      </div>
                                                        </div>
                                          </div>
                                          <div className='card p-3 content-4 mb-5'>
                                                        <div className='row'>
                                                                      <div className='col-11'>
                                                                                    <span className='text-danger'><strong>Hukuki Bildirim</strong></span><br />
                                                                                    <span className='text2 text-muted'>Eğer araç sahibi arandığında rahatsız edildiğini belirtirse,tüm hukuksal haklar aranacaktır. Bu çerçevede, rahatsız edici davranışlardan kaçınmanız önemlidir.</span>

                                                                      </div>

                                                        </div>
                                          </div>
                            </div>
                                          <footer className='footer mt-5'>
        <div className='row'>
          <div className='col-12 row'>
            <div className='col-6 d-flex align-items-center'>
              <img src={img6} alt="Logo" />
              <div className='row '>
                <span style={{marginLeft:'5px'}} className='text ml-2'><strong>Arama Başlat</strong></span>
                <span style={{marginLeft:'5px'}} className='text text-muted ml-2'><strong>QR CARS</strong></span>
              </div>
            </div>
            <div className='col-6 justify-content-center text-center'>
              <img src={img4} alt="Logo" />
            </div>
          </div>
        </div>
      </footer>
                            </>
                   
              )
}

export default DefaultPage