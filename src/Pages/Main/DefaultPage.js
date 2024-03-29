import React from "react";
import img1 from "../../assets/img/img1.svg";
import img2 from "../../assets/img/img2.svg";
import img3 from "../../assets/img/img3.svg";
import img4 from "../../assets/img/img4.svg";
import img5 from "../../assets/img/img5.svg";
import img6 from "../../assets/img/img6.svg";
import img7 from "../../assets/img/img7.svg";
import img8 from "../../assets/img/img8.svg";
const DefaultPage = () => {
  return (
    <div className="mb-6">
      <div className="container mt-4">
        <div className="content-1 p-3 mb-3">
          <div className="row col-12">
            <h2>
            <strong>16 AFC 76</strong>
            </h2>
            <span className="text">QR CARS’a hoş geldin!</span>
          </div>
        </div>
        <div className="card p-3 content-2 mb-3">
          <div className="row">
            <div className="col-8 mb-1">
              <div className="card-title">
                <img src={img3} />{" "}
                <span className="text ">
                  <strong>Profil Durum Bilgisi</strong>
                </span>
                <br />
              </div>
              <span className="text custom-color mt-2">
                Marketteyim acilse arayabilirsiniz.
              </span>
            </div>
            <div className="col-4 mb-1">
              <img src={img1} width={100} />
            </div>
          </div>
        </div>
        <div className="card p-3 content-3 mb-3">
          <div className="row">
            <div className="col-10 mb-1">
              <div className="card-title">
                <img src={img5} />
                <span className="text m-1">
                  <strong>Sabit Telefon</strong>
                </span>
                <br />
              </div>

              <span className="text2  text-muted">
                QRcars uygulamamızı kullanarak araç sahibine kolayca
                ulaşabilirsiniz!
              </span>
            </div>
            <div className="col-2 mb-1 d-flex justify-content-end text-center">
              <img src={img7} width={25} />
            </div>
          </div>
        </div>
        <div className="card p-3 content-3 mb-3">
          <div className="row">
            <div className="col-10 mb-1">
              <div className="card-title">
                <img src={img8} />
                <span className="text m-1">
                  <strong>İnternet Bağlantı Araması</strong>
                </span>
                <br />
              </div>

              <span className="text2  text-muted">
                WhatsApp bağlantısı kullanarak araç sahibine kolayca
                ulaşabilirsiniz.
              </span>
            </div>
            <div className="col-2 mb-1 d-flex justify-content-end text-center">
              <img src={img7} width={25} />
            </div>
          </div>
        </div>
        <div className="card p-3 content-4 mb-5">
          <div className="row">
            <div className="col-11">
              <div className="card-title">
                <span className="text custom-color">
                  <strong>Hukuki Bildirim</strong>
                </span>
                <br />
              </div>
              <span className="text2 text-muted">
                Eğer araç sahibi arandığında rahatsız edildiğini belirtirse,tüm
                hukuksal haklar aranacaktır. Bu çerçevede, rahatsız edici
                davranışlardan kaçınmanız önemlidir.
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-5">
        <div className="row">
          <div className="col-12 p-0 row">
            <div className="col-6 d-flex align-items-center">
              <img src={img6} alt="Logo" />
              <div className="row ">
                <span style={{ marginLeft: "5px" }} className="text ml-2">
                  <strong>Arama Başlat</strong>
                </span>
                <span
                  style={{ marginLeft: "5px" }}
                  className="text text-muted ml-2"
                >
                  <strong>QR CARS</strong>
                </span>
              </div>
            </div>
            <div className="col-6 d-flex  justify-content-end text-end">
              <img src={img4} width={125} alt="Logo" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DefaultPage;
