import React from "react";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Check, MoreVert } from "@mui/icons-material";

type Column = {
  id: string;
  label: string;
};

type Row = Record<string, any>;

type CommonTableProps = {
  title?: string;
  subtitle?: string;
  columns: Column[];
  rows: Row[];
  renderCell: (id: string, value: any, row?: Row) => React.ReactNode;
  showMenuIcon?: boolean;
  pedding?: string
};

const CommonTable: React.FC<CommonTableProps> = ({
  title,
  subtitle,
  columns,
  rows,
  renderCell,
  pedding,
  showMenuIcon = false,
}) => {
  return (
    <Box
      component={Paper}
      p={2}
      borderRadius={"15px"}
      sx={{ boxShadow: "0px 3.5px 5.5px 0px #00000005" }}
    >
      {(title || showMenuIcon) && (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={subtitle ? 0 : 2}
        >
          {title && (
            <Typography
              sx={{
                color: "#2D3748",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "140%",
              }}
            >
              {title}
            </Typography>
          )}

          {showMenuIcon && (
            <IconButton
              aria-label="menu"
              size="small"
              sx={{ p: 0 }}
            >
              <MoreVert />
            </IconButton>
          )}
        </Stack>
      )}

      {subtitle && (
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "#68D391",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: "2px",
            }}
          >
            <Check
              sx={{
                fontSize: "9px",
                color: "#fff",
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#A0AEC0",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
        </Stack>
      )}

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.id}
                  sx={{
                    color: "#A0AEC0",
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={col.id}
                    sx={{
                      padding: pedding ?? '21px',
                      borderBottom: rowIndex === rows.length - 1 ? 'none' : '1px solid #eee', 
                    }}
                  >
                    {renderCell(col.id, row[col.id], row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CommonTable;