import Head from "next/head";

import {
  Flex,
  IconButton,
  Img,
  useTheme,
  Container,
  Box,
} from "@chakra-ui/react";
// import Container from '@/components/Container'
import Layout from "@/components/Layout";
import CommunityContentLayout from "@/components/Dashboard/CommunityContentLayout";
import CommunityLeftSidebar from "@/components/Dashboard/CommunityLeftSidebar";
import CommunityRightSidebar from "@/components/Dashboard/CommunityRightSidebar";
import CommunityMainContent from "@/components/Dashboard/CommunityMainContent";
import withAuth from "middleware/withAuth";
import { NextPageContext } from "next";
import { initialRecoilState } from "recoilStore/initialEffect";
import { useEffect, useMemo } from "react";
import { useSetRecoilState } from "recoil";
import { AuthAtom } from "recoilStore/AuthAtom";

function community(props: any) {
  const theme = useTheme();
  const setUser = useSetRecoilState(AuthAtom);
  const { secondaryBlack } = theme.colors.brand;

  useEffect(() => {
    if (props.initialRecoilState?.user) {
      setUser({
        token: props?.initialRecoilState?.user?.token,
        ...props?.initialRecoilState?.user,
      });
    }
  }, [props.initialRecoilState?.user]);

  // useMemo(() => {
  //   const context = typeof window !== "undefined" ? "client" : "server";
  //   console.log(`<${context}> [initialRecoilState]`, props.initialRecoilState);

  //   initialRecoilState = props.initialRecoilState; // Overwrite the global mutable variable
  // }, []);

  return (
    <div>
      <Head>
        <title>Welcome - Community</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box bg={secondaryBlack["200"]}>
          <Container
            maxW="120em"
            px={{ base: "1rem", lg: "4rem" }}
            bg={secondaryBlack["300"]}
          >
            <CommunityContentLayout>
              <CommunityLeftSidebar />
              <CommunityMainContent />
              <CommunityRightSidebar />
            </CommunityContentLayout>
          </Container>
        </Box>
      </Layout>
    </div>
  );
}

export default community;

export const getServerSideProps = withAuth(async (context: NextPageContext) => {
  let user = null;
  if (context.res["user"]) user = context.res["user"];

  return {
    props: {
      initialRecoilState: { user },
    },
  };
});
