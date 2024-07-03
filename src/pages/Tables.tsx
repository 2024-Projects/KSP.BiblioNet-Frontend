import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import BookList from '../components/Tables/BookList';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Biblioteca" />
      <div className="flex flex-col gap-10">
        <BookList />
      </div>
    </>
  );
};

export default Tables;
