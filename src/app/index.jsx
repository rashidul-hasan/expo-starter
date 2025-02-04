import {Text,Button} from "react-native";
import { useEffect } from "react";
import migration from "../db/migration";
import { db } from "@/db/db";
import { users } from "@/db/schema";

export default function Index() {
  useEffect(()=>{
    // migration();
  })
  return (
    <>
    <Text>
      
      test
    </Text>
    <Button
    title="Test"
    onPress={async ()=>{
      // await db.insert(users).values({
      //   name:"Mehedi",
      //   email:"mehedi78726"
      // });

      console.log(await db.select().from(users))
    }}
    >

    </Button>
    </>
  );
}
