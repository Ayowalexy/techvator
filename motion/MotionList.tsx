import { ListProps, List, ListItemProps, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionList = motion<ListProps>(List);
export const MotionListItem = motion<ListItemProps>(ListItem);
