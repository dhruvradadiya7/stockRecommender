import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import RecoTable from "./components/RecoTable";
import StockSearchForm from "./components/StockForm";
import { dataGenerator } from "./utils/dataGenerator";
import useRecommendation from "./utils/useRecommendation";
import userEvent from "@testing-library/user-event";

test("renders first component in the app", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Stock Market/i);
  expect(linkElement).toBeInTheDocument();
});

test("Button should exist", () => {
  render(<StockSearchForm />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Table should print something when there is no data", () => {
  render(<RecoTable />);
  const statement = screen.getByText(
    "Enter Stock Symbol and search recommendation."
  );
  expect(statement).toBeInTheDocument();
});

test("Table must render completely when correct data is passed", () => {
  const stockData = dataGenerator("ABC", 10, [
    { twitter: true, reddit: false, quora: true, facebook: true },
  ]);
  const recommendedData = useRecommendation(stockData);
  render(<RecoTable data={recommendedData} stock="ABC" />);

  const tableRow = screen.getAllByRole("row");
  expect(tableRow).toHaveLength(11);
});

test("Changing days window from 10 to 22 should render 20 rows", async() => {
  const stockData = dataGenerator("ABC", 20, [
    { twitter: true, reddit: false, quora: true, facebook: true },
  ]);
  const recommendedData = useRecommendation(stockData);
  render(<RecoTable data={recommendedData} stock="ABC" />);

  const tableRow = screen.getAllByRole("row");
  expect(tableRow).toHaveLength(21);
  
});