export interface Ipassenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: { name: string; age: number }[] | null;
}