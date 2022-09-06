export default function getUpdatedClonedPageObject(
  pageObj,
  pageSection,
  pageSectionElement,
  value
) {
  const updatedPageInformation = structuredClone(pageObj);
  updatedPageInformation[pageSection][pageSectionElement] = value;
  return updatedPageInformation;
}
