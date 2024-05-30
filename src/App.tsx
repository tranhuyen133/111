import React from "react";
import "./App.css";
export default function App() {
  return (
    <div>
      <>
        <div className="home_app">
          {/* Header */}
          <header className="header">
            <ul className="header-items">
              <li className="header-item">
                <a href="" className="header-item-link logo">
                  Rikkei_Shop
                </a>
              </li>
              <li className="header-item">
                <input
                  className="search-bar"
                  type="search"
                  placeholder="Nhập để tìm kiếm"
                />
                <button className="search-icon">
                  <i className="fas fa-search" />
                </button>
              </li>
              <li className="header-item">
                <a href="" className="header-item-link header-cart">
                  <i className="header-cart-icon fas fa-shopping-cart" />
                  Giỏ hàng
                </a>
              </li>
              <li className="header-item">
                <a className="header-item-link header-login">Đăng nhập</a>
              </li>
              <li className="header-item">
                <a className="header-item-link header-signup">Đăng ký</a>
              </li>
            </ul>
          </header>
          {/* Banner */}
          <div className="banner">
            <img
              src="public/Banner/banner-1.jpg"
              alt=""
              className="banner-images"
            />
            
          </div>
          <br />
         
          <div className="slides-dot" style={{ textAlign: "center" }}>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        
          <div className="container" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="grid">
              <div className="grid__row">
                <div className="grid__column-2">
                  <nav className="category">
                    <h3 className="category_heading">
                      <i className="category_heading-icon fas fa-list" />
                      Danh mục sản phẩm
                    </h3>
                    <ul className="category-list">
                      <li className="category-item category-item--active">
                        <a id="all" className="category-item__link">
                          Tất cả sản phẩm
                        </a>
                      </li>
                      <li className="category-item category-item">
                        <a id="thietBiDienTu" className="category-item__link">
                          Thiết bị điện tử
                        </a>
                      </li>
                      <li className="category-item">
                        <a id="sach" className="category-item__link">
                          Sách
                        </a>
                      </li>
                      <li className="category-item">
                        <a id="doTieuDung" className="category-item__link">
                          Đồ tiêu dùng
                        </a>
                      </li>
                      <li className="category-item">
                        <a id="thoiTrang" className="category-item__link">
                          Thời trang
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="grid__column-10">
                  <div className="product">
                    <div id="product_items" className="grid__row">
                      Product item
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Thietbidientu/iphone6.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Iphone 6
                          </h4>
                          <div className="product-item_price">30.000.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Apple</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Thietbidientu/iphone6plus.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Iphone 6plus
                          </h4>
                          <div className="product-item_price">30.000.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Apple</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Thietbidientu/iphone7.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Iphone 7
                          </h4>
                          <div className="product-item_price">30.000.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Apple</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Thietbidientu/iphone7plus.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Iphone 7plus
                          </h4>
                          <div className="product-item_price">30.000.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Apple</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div id="product_items" className="grid__row">
                      Product item
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Thietbidientu/iphone8.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Iphone 8
                          </h4>
                          <div className="product-item_price">30.000.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Apple</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Thietbidientu/iphone8plus.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Iphone 8plus
                          </h4>
                          <div className="product-item_price">30.000.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Apple</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Thietbidientu/iphone11.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Iphone 11
                          </h4>
                          <div className="product-item_price">30.000.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Apple</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Thietbidientu/iphone11pro.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Iphone 11 Pro
                          </h4>
                          <div className="product-item_price">30.000.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Apple</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div id="product_items" className="grid__row">
                      Product item
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Sach/DacNhanTam.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Đắc Nhân Tâm
                          </h4>
                          <div className="product-item_price">150.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Sách</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Sach/NhaGiaKim.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Nhà Giả Kim
                          </h4>
                          <div className="product-item_price">70.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Sách</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Sach/MatBiec.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                            Mắt Biếc
                          </h4>
                          <div className="product-item_price">200.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Sách</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      <div className="grid__column-2-4">
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage:
                                "url(/public/Product/Sach/ToiTuHoc.jpg)",
                            }}
                          />
                          <h4 className="product-item_name">
                           Tôi Tự Học
                          </h4>
                          <div className="product-item_price">150.000đ</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">50 đã bán</span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">Sách</span>
                            <span className="product-item_place">Hà Nội</span>
                          </div>
                        </a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="footer">
            <div className="grid">
              <div className="grid__row">
                <div className="grid__column-2-4">
                  <h3 className="footer_heading">Chăm sóc khách hàng</h3>
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Trung tâm trợ giúp
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Hướng dẫn mua hàng
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="grid__column-2-4">
                  <h3 className="footer_heading">Giới thiệu</h3>
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Điều khoản
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Tuyển dụng
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="grid__column-2-4">
                  <h3 className="footer_heading">Danh mục sản phẩm </h3>
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Thời trang
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Đồ tiêu dùng
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Thiết bị điện tử
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        Sách
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="grid__column-2-4">
                  <h3 className="footer_heading">Theo dõi chúng tôi</h3>
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        <i className="footer-item_icon fab fa-facebook" />
                        Facebook
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        <i className="footer-item_icon fab fa-instagram" />
                        Instagram
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="" className="footer-item_link">
                        <i className="footer-item_icon fab fa-twitter" />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="grid__column-2-4">
                  <h3 className="footer_heading">Đội ngũ phát triển</h3>
                  <ul className="footer-list">
                    <li className="footer-item">
                      <span className="footer-item_member">Trịnh Quốc Hai</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        
      </>
    </div>
  );
}
