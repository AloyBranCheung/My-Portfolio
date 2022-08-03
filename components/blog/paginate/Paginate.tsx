import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import BlogPreviewCard from "../blog-preview-card/BlogPreviewCard";
import styles from "./Paginate.module.css";

type Props = {
  blogs: {
    title: string;
    description: string;
    timeStamp: string;
    imgSrc: string;
    id: string;
  }[];
};

export default function PaginatedItems({ blogs }: Props) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<
    {
      title: string;
      description: string;
      timeStamp: string;
      imgSrc: string;
      id: string;
    }[]
  >([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, blogs]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };

  const blogMap = (
    <>
      {currentItems.map((blog) => {
        return (
          <BlogPreviewCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            timeStamp={blog.timeStamp}
            imgSrc={blog.imgSrc}
            className={styles.gridCard}
          />
        );
      })}
    </>
  );

  return (
    <>
      <div>{blogMap}</div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName={styles.container}
        pageClassName={styles.li}
        nextClassName={styles.next}
        previousClassName={styles.previous}
      />
    </>
  );
}
