export const formatDate = (dateAsString: string, withTime=false): string => {
    const date  = new Date(dateAsString);
    if (withTime) {
        return date.toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
    }
    return date.toLocaleString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}