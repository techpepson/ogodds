import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Avatar, Button, DropdownMenu, Table, Theme } from "@radix-ui/themes";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./utils/Header";
import { images } from "../assets/assets";

const Home: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      {/*home page section*/}

      <Theme>
        <div className={`container`}>
          <Header />
          {/*container for the upper content of the home page.*/}
          <div className={``}>
            {/*container for the texts in the upper home page section*/}
            <div>
              <h1>Welcome to OG ODDS</h1>
              <span>
                Your No.1 sports prediction channel, we provide you with amazing
                and accurate bet tips and predictions.
              </span>
            </div>
            <div>
              <Button>
                <Link to="/">
                  JOIN VIP PAGE <ArrowRightIcon />
                </Link>
              </Button>
              <Button>
                <Avatar src="#" fallback="TG" alt="Telegram logo" />
                JOIN TELEGRAM CHANNEL
              </Button>
            </div>
          </div>
          {/*mid-section of the homepage*/}
          <div>
            <p>POPULAR LEAGUES</p>
            {/*scrolling images*/}
            <div>
              {images.map((img, index) => (
                <div>
                  <img src={img.src} alt={img.describe} key={index} />
                  <p>{img.describe}</p>
                </div>
              ))}
            </div>
          </div>
          {/*bottom section of the home page*/}

          <div>
            <p>FREE BETTING SLIPS (LIMITED)</p>
            {/*container for the table in the bottom*/}
            <div>
              <div>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <div className={`flex`}>
                      <p
                        onClick={() => {
                          toggleDropdown();
                        }}
                      >
                        PAST SLIPS
                      </p>
                      {!isDropdownOpen ? (
                        <DropdownMenu.TriggerIcon />
                      ) : (
                        <DropdownMenu.Separator />
                      )}
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item>
                      <Table.Root>
                        <Table.Header>
                          <Table.ColumnHeaderCell>
                            League
                          </Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Teams</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Tips</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>
                            Results
                          </Table.ColumnHeaderCell>
                        </Table.Header>
                        <Table.Row>
                          <Table.RowHeaderCell>
                            International Friendlies
                          </Table.RowHeaderCell>
                          <Table.Cell>Denmark vs Switzerland</Table.Cell>
                          <Table.Cell>Over 15 goals</Table.Cell>
                          <Table.Cell>Empty</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.RowHeaderCell>
                            International Friendlies
                          </Table.RowHeaderCell>
                          <Table.Cell>Denmark vs Switzerland</Table.Cell>
                          <Table.Cell>Over 15 goals</Table.Cell>
                          <Table.Cell>Empty</Table.Cell>
                        </Table.Row>
                      </Table.Root>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </div>
              {/*Free hot odds dropdown*/}
              <div>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <div className={`flex`}>
                      <p
                        onClick={() => {
                          toggleDropdown();
                        }}
                      >
                        PAST SLIPS
                      </p>
                      {!isDropdownOpen ? (
                        <DropdownMenu.TriggerIcon />
                      ) : (
                        <DropdownMenu.Separator />
                      )}
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item>
                      <Table.Root className="h-full">
                        <Table.Header>
                          <Table.ColumnHeaderCell>
                            League
                          </Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Teams</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Tips</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>
                            Results
                          </Table.ColumnHeaderCell>
                        </Table.Header>
                        <Table.Row>
                          <Table.RowHeaderCell>
                            International Friendlies
                          </Table.RowHeaderCell>
                          <Table.Cell>Denmark vs Switzerland</Table.Cell>
                          <Table.Cell>Over 15 goals</Table.Cell>
                          <Table.Cell>Empty</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.RowHeaderCell>
                            International Friendlies
                          </Table.RowHeaderCell>
                          <Table.Cell>Denmark vs Switzerland</Table.Cell>
                          <Table.Cell>Over 15 goals</Table.Cell>
                          <Table.Cell>Empty</Table.Cell>
                        </Table.Row>
                      </Table.Root>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </div>
              {/*Midnight odds dropdown*/}
              <div>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <div className={`flex`}>
                      <p
                        onClick={() => {
                          toggleDropdown();
                        }}
                      >
                        PAST SLIPS
                      </p>
                      {!isDropdownOpen ? (
                        <DropdownMenu.TriggerIcon />
                      ) : (
                        <DropdownMenu.Separator />
                      )}
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item>
                      <Table.Root className="h-full">
                        <Table.Header>
                          <Table.ColumnHeaderCell>
                            League
                          </Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Teams</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>Tips</Table.ColumnHeaderCell>
                          <Table.ColumnHeaderCell>
                            Results
                          </Table.ColumnHeaderCell>
                        </Table.Header>
                        <Table.Row>
                          <Table.RowHeaderCell>
                            International Friendlies
                          </Table.RowHeaderCell>
                          <Table.Cell>Denmark vs Switzerland</Table.Cell>
                          <Table.Cell>Over 15 goals</Table.Cell>
                          <Table.Cell>Empty</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.RowHeaderCell>
                            International Friendlies
                          </Table.RowHeaderCell>
                          <Table.Cell>Denmark vs Switzerland</Table.Cell>
                          <Table.Cell>Over 15 goals</Table.Cell>
                          <Table.Cell>Empty</Table.Cell>
                        </Table.Row>
                      </Table.Root>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </div>
            </div>
            {/*side data of the home page*/}
            <div>
              <div>
                <p>
                  Are you ready to make money with our automatic odds? If you
                  already have an account
                  <Button>
                    <Link to="/">Login</Link>
                  </Button>
                </p>
              </div>
              <div>
                If you are a new user and don't have an account,
                <Button>
                  <Link to="/">SiIGN UP</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Home;
