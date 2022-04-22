import React from "react";
import { Button, Image } from "@chakra-ui/react";

type Props = {
  title: string;
  artists: string;
  album: string;
  image: string;
  buttonSelect: () => void;
  textSelect: boolean;
};

const List = ({
  title,
  artists,
  album,
  image,
  buttonSelect,
  textSelect,
}: Props) => {
  const setSelect = () => {
    buttonSelect();
  };

  return (
    <div>
      <div className="border p-3 mt-3">
        <div className="d-flex  ">
          <div className="h-100">
            <Image src={image} alt="image" boxSize={[160, 180, 200]} />
          </div>
          <div className="px-3">
            <div>
              <h2 className="text-white">{title}</h2>
            </div>
            <div>
              <p className="mt-3 text-white">{artists}</p>
            </div>
            <div>
              <p className="mt-3 text-white">{album}</p>
            </div>
            <div className="mt-3">
              {textSelect ? (
                <Button
                  bg="#1ed760"
                  color="white"
                  size="sm"
                  _hover={{ bg: "#1ed760" }}
                  _active={{ bg: "#1ed760" }}
                  onClick={setSelect}
                >
                  Selected
                </Button>
              ) : (
                <Button
                  bg="#1ed760"
                  color="white"
                  size="sm"
                  _hover={{ bg: "#1ed760" }}
                  _active={{ bg: "#1ed760" }}
                  onClick={setSelect}
                >
                  Select
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
