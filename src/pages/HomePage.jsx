import React from "react";
import { Link } from "react-router-dom";
import dinoImage from "../assets/realDino.png";


const HomePage = () => {
  return (
    <div className="bg-[#f5f2e5] h-[screen] gap-10">
      {/* Main Section */}
      <div className="flex flex-col gap-1 border-2 border-black w-[90%] text-center mx-auto pb-0 m-0">
        {/* Title */}
        <div className="text-center justify-center flex font-gravity text-[250px] font-bold">
          <h1 className="text-black">Free</h1>
          <span className="text-[#DC483A]">3</span>
          <h1 className="text-black">Lance</h1>
        </div>

        

        {/* Buttons Panel */}
        <div
          id="panel"
          className="flex font-gravity mb-16 bg-black h-[45px] items-center justify-center w-[800px] rounded-[20px] text-center mx-auto"
        >
          {/* Buttons with hover effects */}
          <Link
            to="/login"
            className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out "
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
          >
            Signup
          </Link>
          <Link
            to="/search"
            className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out "
          >
            Search
          </Link>
          <Link
            to="/product"
            className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
          >
            Product
          </Link>
        </div>

        {/* image-dino */}
        <div>
  <img
    src={dinoImage}
    alt="Dinosaur"
    className="size-20 ml-5 text-white animate-dino"
  />
</div>


      </div>

      {/* Description Section */}
      <div className="h-[40%] border-2 border-t-0 border-black w-[90%] text-center mx-auto">
        <div className="border-2 border-t-0 rounded-b-md border-black w-[50%] px-5 py-2 text-center mx-auto">
          <p>
            Free3Lance is a decentralized freelancing platform that connects
            clients and freelancers directly using blockchain technology. It
            eliminates intermediaries, provides transparent payment systems via
            smart contracts, and ensures secure user authentication through Web3
            services. The platform also introduces a reputation system and
            dispute resolution powered by decentralized governance.
          </p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sunt atque dolore ducimus tempore, soluta ad eos error ut officiis exercitationem at maiores, in quod labore accusantium facere corrupti nostrum eius repudiandae incidunt vel fugit aliquam? Ullam vel sunt asperiores consequuntur expedita beatae iste rerum, recusandae blanditiis! Natus enim repudiandae aut expedita officiis porro animi pariatur, inventore fugit corporis asperiores iure dignissimos incidunt ipsam sequi voluptate laborum magni aperiam aliquam maiores autem velit esse nihil repellendus. Officia aspernatur, tenetur corrupti, explicabo assumenda voluptas dolorum omnis quibusdam voluptates earum suscipit, sapiente et aperiam quas aliquam placeat porro? Dolore facilis quasi repudiandae eius accusamus quis possimus animi magnam! Sapiente, ipsum? Ad, cum unde, culpa iusto quae et eius cupiditate, dolore fugit ullam dignissimos velit quia? Architecto iure maiores illum, minus impedit fugiat accusantium officiis non, doloremque dolores asperiores perferendis. Tempore, a nobis. Quod autem sunt enim exercitationem aperiam odit nemo nobis sint atque fuga, quia ex. Magni voluptas, perspiciatis nisi asperiores sit voluptates ipsum a fuga alias non laboriosam optio nostrum quia odit veritatis provident officia? Quo hic dignissimos suscipit eveniet soluta sequi natus. Quisquam, quas. Omnis accusantium, natus nobis magnam dicta voluptatibus quaerat placeat est, aliquid nulla, quis nemo molestias! Harum illo similique sint tempore ea accusantium architecto molestias reiciendis debitis sit in repellendus eius quia quos dolore ipsam rem maiores, nulla ex officiis temporibus, fugiat possimus non sed. Repellendus dignissimos assumenda id autem earum quis explicabo, ab similique fuga aliquid ratione dolorum error odit facere maiores alias quibusdam facilis culpa ipsam tempore eius. Natus ad cupiditate excepturi aut ratione quis quasi at praesentium accusamus officia sit, alias explicabo veniam dignissimos ducimus aperiam culpa, quisquam voluptate iure illum! Delectus blanditiis ex minus perspiciatis provident. Voluptates cum, tempore dolores ullam perferendis iure distinctio soluta eaque esse doloribus enim nesciunt recusandae quasi. Nihil facere tenetur ipsum nulla nesciunt. Vel doloribus consectetur nostrum consequatur impedit qui at omnis voluptatum voluptatem, ducimus placeat temporibus maiores inventore ut soluta laudantium hic minus distinctio dicta tempore sapiente sit nisi aliquid? Est ex maxime tempore, consequatur quod non fugit et vitae, tenetur laudantium minima. Necessitatibus, vitae et. Quas nam, deserunt accusantium vero, ea sed, perspiciatis laboriosam perferendis voluptatum voluptas iure eligendi adipisci. Consequatur amet sapiente quam aliquid nostrum voluptates laudantium quae. Assumenda illum a deserunt, natus repellendus voluptatum id velit, nostrum, dignissimos qui odio odit saepe. Nobis sequi facilis repudiandae inventore dolor consectetur aliquam, excepturi aliquid quis illum!</p>
      </div>
    </div>
  );
};

export default HomePage;
