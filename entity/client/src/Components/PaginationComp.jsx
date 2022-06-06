import { Pagination } from "react-bootstrap";

import { useSearchParams } from "react-router-dom";

const PaginationComp = (props) => {
   const [searchParams, setSearchParams] = useSearchParams();

   const pages = new Array(props.totalPages).fill(null).map((v, i) => i + 1);
   return (
      <div className="paginationBs">
         <Pagination size='lg'>
            <Pagination.First
               onClick={() => {
                  setSearchParams({
                     page: 1,
                  });
                  props.setPageNumber(1);
               }}
            />
            <Pagination.Prev
               onClick={() => {
                  setSearchParams({
                     page: Math.max(1, props.pageNumber),
                  });
                  props.setPageNumber(Math.max(0, props.pageNumber));
               }}
            />
            {pages.map((page) => (
               <Pagination.Item
                  onClick={() => {
                     setSearchParams({ page: page });
                     props.setPageNumber(page);
                  }}
               >
                  {page}
               </Pagination.Item>
            ))}
            <Pagination.Next
               onClick={() => {
                  setSearchParams({
                     page: Math.min(props.totalPages, props.pageNumber + 1),
                  });
                  props.setPageNumber(
                     Math.min(props.totalPages, props.pageNumber + 1)
                  );
               }}
            />
            <Pagination.Last
               onClick={() => {
                  setSearchParams({
                     page: props.totalPages,
                  });
                  props.setPageNumber(props.totalPages);
               }}
            />
         </Pagination>
      </div>
   );
};

export default PaginationComp;
