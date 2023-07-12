# Next - Products

## Getting Started

Follow the instructions below to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 18.16.1)
- npm (version 9.5.1)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/xenom97/next-posts.git

   ```

2. Duplicate the `.env.local.example` file and rename it to `.env.local`. Make sure to fill in the necessary environment variables.

3. Install dependencies:
   ```shell
   npm install
   ```

### Usage

1. Run the development server:

   ```shell
   npm run dev
   ```

2. Open your browser and visit http://localhost:3000 to access the application

### Routing

The application uses the following routes:

| Route          | Description                                   |
| ---------------| --------------------------------------------- |
| `/`            | Redirects to `/products`.                     |
| `/products`    | Displays the list of products                 |
| `/carts`       | Displays the list of carts                    |
| `/carts:id`    | Displays the detailed of a specific cart      |

