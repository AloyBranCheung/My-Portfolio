import React, { SyntheticEvent, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import BlogPreviewCard from "../blog-preview-card/BlogPreviewCard";
import styles from "./Paginate.module.css";
import { useRouter } from "next/router";

type Props = {
  blogs: {
    firebaseKey: string;
    date: string;
    description: string;
    imgUrl: string;
    title: string;
    _id: string;
  }[];
};

export default function PaginatedItems({ blogs }: Props) {
  const router = useRouter();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<
    {
      firebaseKey: string;
      date: string;
      description: string;
      imgUrl: string;
      title: string;
      _id: string;
    }[]
  >([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogs.reverse().slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, blogs]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };

  // go to full page click handler
  const onClickHandler = (event: SyntheticEvent) => {
    const blogId = event.currentTarget.id;
    router.push(`/blog/${blogId}`);
  };

  const blogMap = (
    <>
      {currentItems.map((blog) => {
        return (
          <BlogPreviewCard
            key={blog.firebaseKey}
            title={blog.title}
            description={blog.description}
            timeStamp={blog.date}
            imgSrc={blog.imgUrl}
            id={blog._id}
            imageClickHandler={onClickHandler}
          />
        );
      })}
    </>
  );

  return (
    <>
      <div className={styles.blogs}>{blogMap}</div>
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
