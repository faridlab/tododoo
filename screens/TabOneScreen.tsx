import { Feather, Entypo } from '@expo/vector-icons'
import {
  Box,
  Center,
  Checkbox,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  useToast,
  VStack,
  Text
} from 'native-base'
import React, { useState } from 'react'

import { RootTabScreenProps } from '../types'

const tasks = [{
  title: "Code",
  isCompleted: true
}, {
  title: "Meeting with team at 9",
  isCompleted: false
}, {
  title: "Check Emails",
  isCompleted: false
}, {
  title: "Write an article",
  isCompleted: false
}]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [list, setList] = useState(tasks)
  const [inputValue, setInputValue] = useState("")
  const toast = useToast()

  const addItem = (title: string) => {
    if (title === "") {
      toast.show({
        title: "Please Enter Text",
      })
      return
    }

    setList(prevList => {
      return [...prevList, {
        title: title,
        isCompleted: false
      }]
    })
  }

  const handleDelete = (index: number) => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index)
      return temp
    })
  }

  const handleStatusChange = (index: number) => {
    setList(prevList => {
      const newList = [...prevList]
      newList[index].isCompleted = !newList[index].isCompleted
      return newList
    })
  }

  return (
    <Center w="100%" px="5" pt="6">
      <Box w="100%">
        <VStack space={4}>
          <VStack space={2}>
            {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                <Checkbox
                  isChecked={item.isCompleted}
                  onChange={() => handleStatusChange(itemI)}
                  value={item.title}
                  accessibilityLabel={item.title}
                ></Checkbox>
                <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
              color: item.isCompleted ? "gray.400" : "coolGray.800"
            }} _dark={{
              color: item.isCompleted ? "gray.400" : "coolGray.50"
            }} onPress={() => handleStatusChange(itemI)}>
                  {item.title}
                </Text>
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
              </HStack>)}
          </VStack>

          <HStack space={2}>
            <Input
              flex={1}
              onChangeText={v => setInputValue(v)}
              value={inputValue}
              placeholder="Add Task"
              onSubmitEditing={() => {
                addItem(inputValue)
                setInputValue("")
              }}
            />
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
}
