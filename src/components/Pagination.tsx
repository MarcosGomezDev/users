import { useEffect } from "react";

interface Props {
  userPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalUsers: number;
}

export const Pagination: React.FC<Props> = ({
  userPerPage,
  currentPage,
  setCurrentPage,
  totalUsers,
}) => {
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSelectPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a className="pag-previous" onClick={onPreviousPage}>
          Anterior
        </a>
        {/* <a
          className={`pag-previous ${currentPage === 1 ? "is-disabled" : ""}`}
          onClick={onPreviousPage}
        >
          Anterior
        </a> */}
        <ul className="pagination-list">
          {pageNumbers.map((noPage) => (
            <li key={noPage}>
              <a
                className={`pagination-link ${
                  noPage === currentPage ? "is-current" : ""
                }`}
                onClick={() => onSelectPage(noPage)}
              >
                {noPage}
              </a>
            </li>
          ))}
        </ul>
        <a className="pag-next" onClick={onNextPage}>
          Siguiente
        </a>

        {/* <a
          className={`pag-next ${
            currentPage >= pageNumbers.length ? "is-disbaled" : ""
          }`}
          onClick={onNextPage}
        >
          Siguiente
        </a> */}
      </nav>
      {/* <ul>
        {data?.data.length <= 6 &&
          data?.data.map((user: User) => (
            <li key={user.id}>
              <img src={user.avatar} />
              <div>
                <p>{user.email}</p>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
              </div>
            </li>
          ))}
      </ul> */}
    </div>
  );
};
