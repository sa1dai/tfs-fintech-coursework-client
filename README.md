Tinkoff Fintech Frontend Coursework Spring 2019

How to run app:
1. Start server
2. Start app: npm start

Architecture:

Route: "/"
App
  BoardListContainer
    BoardListItem
  BoardCreateForm

Route: "/b/:id/:title"
App
  Board
    CardColumnListContainer
      ColumnList
        CardColumnContainer
          Column
            ColumnItem
          ColumnListAddForm
      ColumnAddForm