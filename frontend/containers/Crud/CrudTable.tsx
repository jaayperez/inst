import React, { Fragment } from 'react';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import IconButton from '../../components/UiElements/IconButton/IconButton';
import { StyledTableHeadAlt } from '../../components/PageStyles/Apps.styled';
import { Tag } from 'baseui/tag';
import { AiFillCloseSquare } from 'react-icons/ai';
import { IoIosEye } from 'react-icons/io';
export default function CrudTable({ data, onUpdate, onDelete }) {
  return data.length !== 0 ? (
    <StyledTable $gridTemplateColumns="130px 200px auto max-content max-content">
      <StyledTableHeadAlt>Title</StyledTableHeadAlt>
      <StyledTableHeadAlt>Description</StyledTableHeadAlt>
      <StyledTableHeadAlt>Slug</StyledTableHeadAlt>
      <StyledTableHeadAlt>Status</StyledTableHeadAlt>
      <StyledTableHeadAlt>Action</StyledTableHeadAlt>
      {data.map((item, index) => {
        const striped = index % 2 === 0;
        if (item && !item.status) return null;
        const status = item.status;
        let tag;
        switch (status) {
          case 'publish':
            tag = (
              <Tag kind="positive" variant="solid" closeable={false}>
                {status}
              </Tag>
            );
            break;
          case 'draft':
            tag = (
              <Tag kind="neutral" variant="light" closeable={false}>
                {status}
              </Tag>
            );
            break;
        }
        return (
          <Fragment key={index}>
            <StyledBodyCell $striped={striped}>{item.title}</StyledBodyCell>
            <StyledBodyCell $striped={striped}>
              {item.description.slice(0, 50)}
            </StyledBodyCell>
            <StyledBodyCell $striped={striped}>{item.slug}</StyledBodyCell>
            <StyledBodyCell $striped={striped}>{tag}</StyledBodyCell>
            <StyledBodyCell $striped={striped}>
              <IconButton onClick={() => onUpdate(item)}>
                <IoIosEye />
              </IconButton>
              <IconButton onClick={() => onDelete(item.id)}>
                <AiFillCloseSquare />
              </IconButton>
            </StyledBodyCell>
          </Fragment>
        );
      })}
    </StyledTable>
  ) : (
    <div>No Data Found</div>
  );
}
