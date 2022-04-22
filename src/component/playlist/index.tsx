import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

type Props = {
  title: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const CreatePlaylist = ({ title, description, submit }: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="ml-4 mt-2">
        <Button
          bg="#1ed760"
          color="white"
          _hover={{ bg: "#1ed760" }}
          _active={{ bg: "#1ed760" }}
          onClick={() => setShowModal(true)}
        >
          Create Playlist
        </Button>
      </div>
      {showModal ? (
        <>
          <div className="m-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-screen my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Playlist</h3>
                </div>
                <form onSubmit={submit}>
                  <div className="relative p-6 flex-auto">
                    <label className="block">
                      <span className="ml-4 block text-sm font-medium text-slate-700">
                        Title
                      </span>
                      <input
                        type="text"
                        name="title"
                        onChange={title}
                        required={true}
                        minLength={10}
                        className="mt-1 ml-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                      />
                    </label>
                    <label className="block">
                      <span className="ml-4 block text-sm font-medium text-slate-700">
                        Description
                      </span>
                      <input
                        type="textarea"
                        name="description"
                        onChange={description}
                        className="mt-1 ml-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                      />
                    </label>
                  </div>
                  <div className="p-3 ml-4 mb-2 flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <ButtonGroup variant="outline" spacing="4" ml={5}>
                      <Button
                        onClick={() => setShowModal(false)}
                        _focus={{
                          outline: "none",
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        colorScheme="blue"
                        type="submit"
                        _focus={{
                          outline: "none",
                        }}
                      >
                        Save Changes
                      </Button>
                    </ButtonGroup>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default CreatePlaylist;
