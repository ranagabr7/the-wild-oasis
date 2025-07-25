import React, { useState } from "react";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiSquare2Stack } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
  // console.log(cabin);
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;
  const [showForm, setshowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} alt={name} />
        <Cabin>{name} </Cabin>
        <div>Fits up to {maxCapacity}</div>
        <Price> {formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          {/* To duplicate
          <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>

          {/* To edit */}
          {/* <button onClick={() => setshowForm((show) => !show)}>
            <HiPencil />
          </button> */}
          {/* To delete */}
          {/* <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button> */}

          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              {/* To duplicate */}
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={handleDuplicate}
                disabled={isCreating}
              >
                Duplicate
              </Menus.Button>
              {/* To edit */}
              <Menus.Button
                icon={<HiPencil />}
                onClick={() => setshowForm((show) => !show)}
              >
                Edit
              </Menus.Button>
              {/* To delete */}
              <Menus.Button
                icon={<HiTrash />}
                onClick={() => deleteCabin(cabinId)}
              >
                Delete
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

export default CabinRow;
