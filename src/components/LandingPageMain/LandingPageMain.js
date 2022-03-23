
import "../../App.css";
import { main_product } from "../../assets";
import { awesomeIcons } from "../../utils";

export const LandingPageMain = () => {
    return(
        <main className="main-wrapper">
          <section className="hero-section">
            <div className="hero-txt">
              <h1 className="h1">One Stop Shop</h1>
              <h2 className="h2 highlight-color">For All Your Chess Needs</h2>
              <button className="btn-primary">Shop Now</button>
            </div>
          </section>

          {/* =====  Categories  ====== */}

          <section className="categories">
            <h3 className="h3 text-center">
              <a href="/categories/products.html">Featured Categories</a>
            </h3>

            <div className="category-cards">
              {/* CATEGORY CARD  */}
              {awesomeIcons.map((items) => {
                return(
                  <a href="/categories/products.html">
                    <div className="card-badge">
                      <i className={`fas fa-${items.icon}`}></i>

                      <div className="card-header-txt">
                        <h3 className="semibold">{items.title}</h3>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </section>

          {/* =====  Trending  ====== */}

          <section className="Trending mt-2">
            <h3 className="h3 text-center mb-1">
              <a href="/categories/products.html">Trending</a>
            </h3>

            <section className="products-section-home">
              <div className="card-badge">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src={main_product}
                    alt="naruto themed notebook"
                  />
                  <div className="badge-in-card">TRENDING</div>
                  <div className="card-floating-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="card-header-txt">
                    <h3 className="semibold">Chess Base 16</h3>
                    <small className="gray-color">Book</small>

                    <div className="card-price">
                      <span className="final-price t1p5 lightbold">₹249 </span>
                      <span className="initial-price t-strike">₹449</span>
                      <span className="discount gray-color">
                          Save ₹200 (44%)
                      </span>
                    </div>
                  </div>
                </div>
                <button className="btn-primary card-btn">Add to Cart</button>
              </div>

              <div className="card-badge">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src={main_product}
                    alt="naruto themed notebook"
                  />
                  <div className="badge-in-card">TRENDING</div>
                  <div className="card-floating-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="card-header-txt">
                    <h3 className="semibold">Chess Base 16</h3>
                    <small className="gray-color">Book</small>

                    <div className="card-price">
                      <span className="final-price t1p5 lightbold">₹249 </span>
                      <span className="initial-price t-strike">₹449</span>
                      <span className="discount gray-color">
                        Save ₹200 (44%)
                      </span>
                    </div>
                  </div>
                </div>
                <button className="btn-primary card-btn">Add to Cart</button>
              </div>

              <div className="card-badge">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src={main_product}
                    alt="naruto themed notebook"
                  />
                  <div className="badge-in-card">TRENDING</div>
                  <div className="card-floating-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="card-header-txt">
                    <h3 className="semibold">Chess Base 16</h3>
                    <small className="gray-color">Book</small>

                    <div className="card-price">
                      <span className="final-price t1p5 lightbold">₹249 </span>
                      <span className="initial-price t-strike">₹449</span>
                      <span className="discount gray-color">
                        Save ₹200 (44%)
                      </span>
                    </div>
                  </div>
                </div>
                <button className="btn-primary card-btn">Add to Cart</button>
              </div>

              <div className="card-badge">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src={main_product}
                    alt="naruto themed notebook"
                  />
                  <div className="badge-in-card">TRENDING</div>
                  <div className="card-floating-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="card-header-txt">
                    <h3 className="semibold">Chess Base 16</h3>
                    <small className="gray-color">Book</small>

                    <div className="card-price">
                      <span className="final-price t1p5 lightbold">₹249 </span>
                      <span className="initial-price t-strike">₹449</span>
                      <span className="discount gray-color">
                        Save ₹200 (44%)
                      </span>
                    </div>
                  </div>
                </div>
                <button className="btn-primary card-btn">Add to Cart</button>
              </div>
            </section>
          </section>
        </main>
    )
}