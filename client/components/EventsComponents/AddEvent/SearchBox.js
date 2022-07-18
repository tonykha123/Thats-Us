import React, { useState } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'

export default function SearchBox(props) {
  const { selectPostion, setSelectPosition } = props
  const [searchText, setSearchText] = useState('')
  const [listPlace, setListPlace] = useState([])
  const [showList, setShowList] = useState(false)

  const handleSearch = () => {
    const params = {
      q: searchText,
      format: 'json',
      addressdetails: 1,
      polygon_geojson: 0,
    }
    const queryString = new URLSearchParams(params).toString()
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result))
        setListPlace(JSON.parse(result))
      })
      .then(() => {
        setShowList(true)
      })
      .catch((err) => console.log('err', err))
  }

  function mapPin(e, item) {
    console.log('item', item.lat, item.lon)
    setSelectPosition(item)
    setShowList(false)
  }

  return (
    // entire search container
    <div className="flex flex-col w-10/12 mt-2 text-sm">
      {/* searchbar input box */}

      <OutlinedInput
        className="w-full mx-auto my-2 h-[5vh]"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value)
        }}
      />

      {/* button */}
      <Button
        className=""
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
      {/* result container */}
      {/* <div className="w-full h-auto overflow-y-auto"> */}
      <List className=" w-full h-[200px]  sm:h-[150px] overflow-y-auto">
        {showList &&
          listPlace.map((item) => {
            return (
              <div
                key={item?.osm_id}
                className="w-full h-auto lg:h-auto "
                // EACH INVIDIVUAL TILE
              >
                <ListItem button onClick={(e) => mapPin(e, item)}>
                  <ListItemIcon>
                    <img
                      src="./images/placeholder.png"
                      alt="Placeholder"
                      style={{ width: 36, height: 36 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            )
          })}
      </List>
      {/* </div> */}
    </div>
  )
}
