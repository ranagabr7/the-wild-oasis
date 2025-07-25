import React, { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { redirect, useNavigate } from "react-router";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1- load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  // 2- if there is no user autheticated, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate]
  );
  // 3- while loading , show spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  // 4- if there is user authenticated, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
