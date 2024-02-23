import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../store";
import { getProducts } from "../../store/slices/product/thunks";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { Spinner, Table, Header, Search } from "../components";

export const DashboardPage = () => {
  const {isLoading, products} = useAppSelector((state: RootState) => state.products);
  const [newProducts, setNewProducts] = useState(products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts() as AppDispatch);
  }, [dispatch]);

  useEffect(() => {
    setNewProducts(products);
  }, [products]);

  const onSearchProducts = (newSearch: string) => {
    if (newSearch.length <= 1) {
      setNewProducts(products)
      return;
    }
    setNewProducts(products.filter(product => product.name.toLocaleLowerCase().includes(newSearch)));
  }

  return (
    <section className="dashboard d-flex flex-column">
      <Header />
      { 
        isLoading ?
        <Spinner /> :
        <>
          <Search onNewSearch={(newSearch: string) => onSearchProducts(newSearch)}/> 
          <Table products={newProducts} />
        </>
      }
    </section>
  )
}
