import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import dinoImage from "../assets/dino.svg";
import GridLines from "react-gridlines";

const HomePage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-[#f5f2e5] h-full gap-10">
      <GridLines
        className="grid-area"
        cellWidth={20}
        strokeWidth={1}
        cellWidth2={20}
      >
        <div className="flex flex-col gap-1 border-2 border-t-0 border-black w-[90%] text-center mx-auto pb-0 m-0 relative">
          <div className="text-center justify-center flex mb-[-50px] font-gravity text-[250px] font-bold">
            <h1 className="text-black">Free</h1>
            <span className="text-[#DC483A]">3</span>
            <h1 className="text-black">Lance</h1>
          </div>

          <div
            id="panel"
            className="flex flex-col font-gravity mb-16 bg-black rounded-[20px] text-center mx-auto relative overflow-hidden transition-all duration-300 ease-in-out" // Added flex-col, overflow-hidden and transition
            style={{ height: isSearchOpen ? '110px' : '45px' }} // Dynamic height
          >
            <div className="flex items-center justify-center h-[45px]"> {/* Container for buttons */}
              <Link
                to="/login"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-300 ease-in-out"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-300 ease-in-out"
              >
                Signup
              </Link>

              <button
                onClick={handleSearchClick}
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-300 ease-in-out"
              >
                Search
              </button>

              <Link
                to="/product"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-300 ease-in-out"
              >
                Product
              </Link>
            </div>

            {/* Search Bar */}
            {isSearchOpen && (
              <div className="w-full h-[45px] flex items-center justify-center bg-[#000000] pt-6 "> {/* Container for search bar */}
                <input
                  type="text"
                  ref={searchInputRef}
                  placeholder="Search..."
                  className="w-[750px] px-4 py-2 text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#DC483A] h-[40px]"
                />
                <button onClick={handleSearchClick} className="ml-2 px-4 py-2 bg-[#DC483A] text-[#f5f2e5] rounded-md hover:bg-[wheat] hover:text-black transition duration-300 h-[40px]">Close</button>
              </div>
            )}
          </div>

          <div>
            <img
              src={dinoImage}
              alt="Dinosaur"
              className="size-20 ml-5 left-[-15px]  text-white animate-dino absolute bottom-[-10px]"
            />
          </div>
        </div>

        <div className="h-[40%] border-2 border-t-0 border-black w-[90%] text-center mx-auto mb-10 pb-10">
          <div className="border-2 border-t-0 rounded-b-md border-black w-[50%] px-5 py-2 text-center mx-auto">
            <p className="ibm-flex-mono">
              Free3Lance is a decentralized freelancing platform that connects
              clients and freelancers directly using blockchain technology. It
              eliminates intermediaries, provides transparent payment systems
              via smart contracts, and ensures secure user authentication
              through Web3 services. The platform also introduces a reputation
              system and dispute resolution powered by decentralized governance.
            </p>
          </div>
          
        </div>
        <div>
          <h1 className="text-9xl">HELLO</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem sint in omnis! Quod perferendis, quasi omnis error porro tenetur tempora molestiae ipsa esse repellendus? Vitae aspernatur quas officia odit id assumenda explicabo iste neque, quasi nulla autem delectus, deserunt qui non consequuntur asperiores cupiditate! Ut sapiente doloribus fugit a laborum assumenda itaque quibusdam voluptate, eligendi corrupti deleniti quisquam. Ut et in distinctio. Magnam molestias natus asperiores, minus repellat inventore libero aliquid cumque porro fugiat quae nihil recusandae adipisci debitis ipsum ex perferendis. Dolorem ab officiis autem qui placeat minima perspiciatis explicabo id quae sunt est maiores, neque ut voluptatem in, odio sequi deserunt, sapiente laboriosam excepturi praesentium voluptatum voluptate ipsam tempora! Laborum neque atque numquam odio, minima cupiditate mollitia ad porro aspernatur iusto minus asperiores nobis suscipit sint. Numquam animi corrupti facere unde rem itaque quas aspernatur ea, iusto aliquam quos voluptas, tempore fuga commodi expedita, modi eius sapiente reiciendis necessitatibus ratione blanditiis molestias velit delectus minima? Illum tempore repellat sapiente praesentium, veritatis beatae est eveniet placeat cupiditate reprehenderit earum asperiores possimus inventore sit tenetur doloribus quibusdam nesciunt! Tempore non adipisci eum reiciendis expedita excepturi asperiores inventore tempora reprehenderit. Totam accusamus voluptas porro illum perspiciatis quo sunt maxime expedita doloremque earum quam ex, tenetur iusto quas in nihil exercitationem praesentium assumenda. In odit dicta quam, quo, consequuntur at totam ad nesciunt praesentium voluptates rem dignissimos ea deserunt omnis veniam deleniti expedita animi reprehenderit asperiores aut non perferendis. Ipsum praesentium est facilis modi, minus itaque, consectetur suscipit nobis officia nesciunt dolores facere, distinctio exercitationem ullam doloremque vel eius voluptatum vero! Doloremque at dolorum voluptates quaerat aperiam consectetur ex perferendis architecto quam accusantium suscipit deserunt sunt repudiandae vero, provident voluptatibus, iusto dignissimos ullam? Deserunt, cumque repellat rem, voluptatem ducimus nobis unde beatae et expedita dignissimos id excepturi praesentium obcaecati quos consectetur aperiam quo dolore est rerum? Vel necessitatibus porro saepe. Eos sequi quasi consequuntur obcaecati dolore? Sapiente harum laborum at. Totam mollitia natus at architecto! Necessitatibus fuga culpa sed, excepturi eos repudiandae magni quas nam deleniti, cum esse hic corporis. Non voluptate optio architecto, corporis odio sint at commodi, aliquam consequatur provident distinctio voluptates minus earum porro veritatis voluptatibus enim ratione nam assumenda error saepe. Maiores vero, doloribus ad commodi rem nobis. Quasi, a. Ipsam dolorem, doloribus ea illo modi sed laudantium repudiandae deleniti, dolores eius sequi. Facilis unde modi rem dolor et saepe soluta, provident veniam ullam ratione hic fuga, maiores nemo laudantium id tempore harum asperiores debitis quidem dolore in voluptate tenetur voluptates! Totam sed magnam laboriosam vero sequi perferendis sit facilis natus, quaerat quia asperiores necessitatibus labore deleniti dolore tenetur iusto voluptatem quo animi aspernatur? Velit, consectetur, mollitia quibusdam ad corrupti asperiores esse eos molestias perspiciatis labore libero id ipsam explicabo quo! Iste optio quasi enim atque odit maiores illo quam placeat dolores, suscipit explicabo in, at inventore cumque, fugiat ipsum voluptatibus nemo laboriosam! Corrupti quidem minus quo, doloremque sit repellat corporis impedit dolorem pariatur accusamus eos consequuntur ad sed beatae provident dolor maxime. Praesentium accusantium voluptatibus enim consectetur quae asperiores, incidunt ad totam temporibus alias accusamus, dolorem repellendus itaque eum, est sapiente veritatis consequatur qui repudiandae non? Maxime error explicabo perspiciatis, cumque mollitia magni molestiae! Aliquam dolor praesentium fugit optio illo est corporis nemo exercitationem, et minima cumque, ipsum eum, necessitatibus deserunt. Numquam libero corrupti esse obcaecati eligendi labore, consectetur, neque voluptates repellat cupiditate id dolores ipsa eveniet et blanditiis illo! Nesciunt quidem, doloribus eligendi voluptates enim quaerat sunt tempore obcaecati repellendus aut, sequi ab velit nostrum quos iste est eaque quis recusandae. Adipisci quod odio iusto! Repellendus sunt reiciendis vel eius, adipisci est amet ad ducimus quam porro autem velit voluptates aspernatur accusamus ut! Dolore, cum? Obcaecati, veniam. Aliquid soluta explicabo animi recusandae, rem praesentium quisquam dolorem sed? Numquam ab doloremque placeat iure laboriosam quisquam recusandae distinctio at nobis, facilis earum, sint corporis laudantium dolore neque asperiores repellendus dolores quam molestias iste quas? Doloribus quia, illum maxime molestiae odio labore ullam saepe dolore veritatis debitis molestias porro ea expedita. Ducimus, velit. Repudiandae libero nam maxime, quam nisi eius? Obcaecati maiores magni nesciunt quis, illum alias, debitis, adipisci illo iste eos officiis corporis quibusdam esse in provident aliquam hic ipsam consequuntur! Voluptatem, voluptate cupiditate. Assumenda corporis, inventore quas optio mollitia, est porro fugiat repudiandae dolores enim accusantium quae illum debitis fuga vero repellendus quasi explicabo necessitatibus, voluptates iste hic soluta? Neque totam, suscipit velit labore architecto facilis. Dolorum at praesentium distinctio cupiditate culpa adipisci dignissimos. Vitae exercitationem nostrum possimus ad explicabo delectus maxime quod sapiente atque saepe iure, asperiores adipisci at enim ipsa fuga, quaerat molestias hic dolor? Quibusdam officia aut eum optio, explicabo fugit iure consequatur autem illum labore consequuntur accusamus neque ab sequi quos asperiores soluta aspernatur ut dolorem doloremque praesentium. Quam saepe earum quia cum alias blanditiis ad perspiciatis, ipsa laboriosam amet pariatur. Veniam sapiente itaque dolor eaque aspernatur non quos quae quidem obcaecati ea exercitationem nam veritatis ullam suscipit, doloribus nemo, est similique explicabo temporibus in? Quos autem dolorum non dolorem delectus quam doloribus eaque praesentium possimus asperiores voluptates iusto reiciendis reprehenderit, laboriosam tempora adipisci, esse minima suscipit veritatis quidem omnis hic consequuntur debitis! Numquam asperiores explicabo fugit consequuntur itaque illo natus voluptatum sit ipsum consequatur beatae repellat eius dignissimos cum voluptatem modi temporibus quod dolorum veritatis reprehenderit voluptate, perspiciatis facere eligendi? Odit, rem exercitationem nesciunt mollitia rerum culpa, fuga perferendis iure maxime doloribus expedita vitae ex ipsum eligendi temporibus cumque dolorem facere aperiam ea ut architecto repellendus eveniet tempora id. Obcaecati accusantium maiores dolorum est, quidem veniam a maxime aliquid ea necessitatibus nam voluptate reiciendis doloremque, impedit ad ut officiis eius perferendis porro fuga dolorem delectus aliquam numquam. Laudantium molestiae quidem totam labore accusamus voluptates magnam nulla iure explicabo, omnis obcaecati architecto vitae consequatur. Natus, sequi dolore? Enim deserunt voluptas similique quo soluta minima vitae expedita ab consectetur, maxime, culpa illo ipsum rerum commodi, odio reprehenderit molestias nemo alias perspiciatis ex ipsa? Facere hic iste quia accusamus assumenda id quos distinctio placeat sunt nihil iusto, nesciunt quis molestias rem in enim velit?</p>
        </div>
      </GridLines>
    </div>
  );
};

export default HomePage;