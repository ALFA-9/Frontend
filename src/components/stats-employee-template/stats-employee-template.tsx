import { FC, MouseEventHandler } from "react";
import styles from "./stats-employee-template.module.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/const-routes";
import LablesSmall from "../../ui/lables/lables-small/lables-small";
import { LablesSmallEnum } from "../../ui/lables/types";
import { EmployeeType } from "../../api/api-types";
import { BASE_URL } from "../../api/api";

interface StatsEmployeeTemplateType {
  data: EmployeeType;
}

const StatsEmployeeTemplate: FC<StatsEmployeeTemplateType> = ({ data }) => {
  const navigate = useNavigate();

  const {
    label,
    id,
    post: subtitle,
    status_idp: status,
    image,
  } = data;

  let statusColor;
  let statusText;

  switch (status) {
    case "in_work":
      statusColor = LablesSmallEnum.blue;
      statusText = "В работе";
      break;
    case "missing":
      statusColor = LablesSmallEnum.gray;
      statusText = "Отсутствует";
      break;
    case "cancelled":
      statusColor = LablesSmallEnum.orange;
      statusText = "Отменён";
      break;
    case "not_completed":
      statusColor = LablesSmallEnum.red;
      statusText = "Не выполнен";
      break;
    case "done":
      statusColor = LablesSmallEnum.green;
      statusText = "Выполнен";

      break;
    default:
      statusColor = LablesSmallEnum.gray;
  }

  const onOuterClick: MouseEventHandler<HTMLDivElement> = () => {
    navigate(routes.headStaff + "/" + id);
  };

  return (
    <li className={`${styles.outer_container}`}>
      <div onClick={onOuterClick} className={styles.container}>
        <img className={styles.img} src={BASE_URL + image} alt={label} />
        <div className={styles.text_wrapper}>
          <h3 className={styles.text_title}>{label}</h3>
          <p className={styles.text_subtitle}>{subtitle}</p>
        </div>
        <div className={styles.lable_wrapper}>
          <LablesSmall color={statusColor} text={statusText} />
        </div>
      </div>
    </li>
  );
};

export default StatsEmployeeTemplate;
