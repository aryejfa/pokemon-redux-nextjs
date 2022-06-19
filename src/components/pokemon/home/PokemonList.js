import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../../../redux/actions/PokemonActions";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PokemonListDetail from "./PokemonListDetail";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const PokemonList = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const PokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    FetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const showData = () => {
    if (PokemonList.Loading) {
      <p>Loading...</p>;
    }

    if (!_.isEmpty(PokemonList.data)) {
      return (
        <div className="grid md:grid-cols-5 grid-cols-2 gap-5">
          {PokemonList.data.map((el) => {
            return <PokemonListDetailShow data={el.name} key={el.name} />;
          })}
        </div>
      );
    }

    if (PokemonList.errorMsg !== "") {
      return <p>{PokemonList.errorMsg}</p>;
    }

    return <p>Unable to get data</p>;
  };

  return (
    <div className="container mx-auto md:px-12 px-6">
      <div className="hidden md:block">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <Link href={`/pokemon/${search}`}>search</Link>
          </button>
        </div>
      </div>
      <div className="md:hidden ">
        <div className="search_mobile">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <Link href={`/pokemon/${search}`}>search</Link>
          </button>
        </div>
      </div>

      {showData()}
      <div className="container mx-auto px-6">
        {!_.isEmpty(PokemonList.data) && (
          <ReactPaginate
            previousLabel={<ChevronLeftIcon className="h-5 w-5" />}
            nextLabel={<ChevronRightIcon className="h-5 w-5" />}
            pageCount={Math.ceil(PokemonList.count / 20)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={0}
            onPageChange={(data) => FetchData(data.selected + 1)}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonList;
export const PokemonListDetailShow = React.memo(PokemonListDetail);