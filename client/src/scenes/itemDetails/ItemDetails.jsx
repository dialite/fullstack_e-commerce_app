import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tab, Tabs } from "@mui/material";
import { FavoriteBorderOutlinedIcon } from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";

const ItemDetails = () => {
  return <div>ItemDetails</div>;
};

export default ItemDetails;
