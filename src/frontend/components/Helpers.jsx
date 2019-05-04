export function formatToSearchValue(displayValue)
{
    return displayValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
