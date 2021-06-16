import { navigationLinks } from "../../service/apiConsts";
import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem } from "@material-ui/core";


export const Navigation = () => {
    return (
        <main>
            { navigationLinks.map( ( item ) => (
                <React.Fragment key={ item.path }>
                    <NavLink to={ item.path }>
                        <ListItem button style={ {display: 'inline'} } key={ item.label }>
                            { item.label }
                        </ListItem>
                    </NavLink>
                </React.Fragment>
            ) ) }
        </main>
    )
}
export default Navigation;