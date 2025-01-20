import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fullBalance, userData } from '../../store/auth/selectors';
import styles from './Card.styles';

const Card = ({ card }) => {
  const { t } = useTranslation();
  const user = useSelector(userData);
  const fiatBalance = useSelector(fullBalance);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{t("general.balance")}</Text>
      {card?.balance ? (
        <>
          <Text style={styles.mainBalance}>
            {card.balance ? parseFloat(card.balance).toFixed(5) : '0.00'} {card.token}
          </Text>
          <Text style={styles.subBalance}>
            {card.convert_balance ? parseFloat(card.convert_balance).toFixed(2) : '0.00'} {user?.display_currency}
          </Text>
        </>
      ) : (
        <Text style={styles.mainBalance}>
          {fiatBalance?.toFixed(2) || '0.00'} {user?.display_currency}
        </Text>
      )}
    </View>
  );
};

export default Card;





