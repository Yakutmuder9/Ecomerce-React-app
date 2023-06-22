import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        fontSize="sm"
        color="gray.500"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">Made with by </Text>
        <Link href="#" target="_blank">
          Yakut Ahmedin
        </Link>
      </Text>

      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.500" fontSize="sm" href="#">
            Simmmple
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.500" fontSize="sm" href="#">
            Creative Tim
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.500" fontSize="sm" href="#">
            Blog
          </Link>
        </ListItem>
        <ListItem>
          <Link color="gray.500" fontSize="sm" href="#">
            License
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
};

export default Footer;
