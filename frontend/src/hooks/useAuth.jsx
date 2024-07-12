import api from "../utils/api.jsx";

import { useState, useEffect } from "react";

export default function useAuth() {
  async function register(user) {
    try {
      const data = await api.post("/users/register", user).then((response) => {
        return response.data;
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return { register };
}
