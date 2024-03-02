<template>
  <div></div>
</template>

<script>
import ethers from "ethers";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Demo",
  async mounted() {
    await this.getValue();
  },
  methods: {
    async execute() {

    },

    async getValue() {
      const abi = [
        {
          constant: false,
          inputs: [
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "setValue",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "value",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ];

      const contractAddress = "0xB6701Eb6a2A0F0Bdfae3Fdf7683F4BA0689FE567";
      const conract = new ethers.Contract(contractAddress, abi);
      const value = await conract.value();
      console.log(value.toString())
    },
  },
};
</script>