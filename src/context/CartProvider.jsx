import { CardContent } from "@mui/material"
import { CardContext } from "./CardContext"


export const CartProvider = ({children}) => {
  return (
    <CardContext.Provider>
        {children}
    </CardContext.Provider>
  )
}
