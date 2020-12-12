import React from "react";
import { render, screen, waitFor,debug } from "@testing-library/react";
import axiosWithAuth, * as mockAxios from '../utils/axiosWithAuth'
import BubblePage from "./BubblePage";

jest.mock('../utils/axiosWithAuth')
jest.mock('axios')

const axios = require('axios')
jest.mock('axios',()=>({
  create: jest.fn(),
  get:jest.fn()
}))

const bubblesFixture = {
  data:[{
  color:"blue",
  code:{
      hex:"#00ffff"
  },
  id:1
},
{
  color:"red",
  code:{
      hex:"#00ffff"
  },
  id:2
}]}

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  const mockedWithAuth = jest.spyOn(mockAxios,'axiosWithAuth')
  mockedWithAuth.mockImplementation(()=>{return axios})
  axios.get.mockResolvedValueOnce(bubblesFixture)
  const {queryAllByTestId, rerender, getByText,debug} = render(<BubblePage/>);
  await waitFor(()=>{})
  debug()
  

});
