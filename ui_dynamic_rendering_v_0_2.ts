declare module namespace {

    export interface ColumnAttribute {
        id: number;
        name: string;
        isFilter: boolean;
        isSortable: boolean;
    }

    export interface PaginationConfig {
        isEnabled: boolean;
        rowsPerPage: number;
    }

    export interface TableData {
        column_attributes: ColumnAttribute[];
        pagination_config: PaginationConfig;
    }

    export interface SubTabData {
        id: number;
        name: string;
        table_data: TableData;
    }

    export interface LobData {
        name: string;
        id: number;
        sub_tab_data: SubTabData[];
    }

    export interface RootObject {
        lob_data: LobData[];
    }

}

